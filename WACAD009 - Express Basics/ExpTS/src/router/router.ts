import { Router } from 'express';
import { URLSearchParams } from 'url';
import { loremIpsum } from 'lorem-ipsum';
import mainController from '../controllers/main';

const router = Router();

// MAIN Controller
router.get('/', mainController.index);
router.get('/bemvindo/:nome', mainController.bemvindo);
router.get('/lorem', mainController.lorem);
router.get('/hb1', mainController.hb1);
router.get('/hb2', mainController.hb2);
router.get('/hb3', mainController.hb3);
router.get('/hb4', mainController.hb4);
router.get('/hb5', mainController.hb5);

// USER Controller

export default router;
