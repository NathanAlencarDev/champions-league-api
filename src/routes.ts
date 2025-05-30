import { Router } from "express";
import * as PlayerController from "./controllers/players-controller";
import * as ClubController from "./controllers/clubs-controller";

//! Gerenciador de rotas.
const router = Router();

router.get("/players", PlayerController.getPlayer);

//!route param: ":'variavel'"
//Players
router.get("/players/:id", PlayerController.getPlayerById);
router.post("/players", PlayerController.postPlayer);
router.delete("/players/:id", PlayerController.deletePlayer);
router.patch("/players/:id", PlayerController.updatePlayer);


//Clubs
router.get("/clubs", ClubController.getClubs);


export default router;