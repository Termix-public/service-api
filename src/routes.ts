import {Router} from "express";
import ContractAnalysis from "./contractAnalysis/controller";
import {chatValidator, contractAndChain, history, transaction} from "./validators";


const router = Router();

const analyzeController = new ContractAnalysis();

router.post('/chat', chatValidator, analyzeController.chat);
router.post('/init', chatValidator, analyzeController.chatInit);
router.post('/contract/analyze', contractAndChain, analyzeController.contractAnalysis);
router.post('/contract/info', contractAndChain, analyzeController.contractInfo);
router.post('/transaction/analyze', transaction, analyzeController.transactionAnalysis);

router.post('/history', history, analyzeController.getPromptHistory);

export default router;
