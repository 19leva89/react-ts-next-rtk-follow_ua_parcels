import { Router } from "express";

import auth from "../middleware/auth.js";
import { all, track, add, archive, restore, remove, edit } from "../controllers/tracks.js";

const router: Router = Router();

// /api/tracks
router.get("/", auth, all);

// /api/tracks/:id
router.get("/:id", auth, track);

// /api/tracks/add
router.post("/add", auth, add);

// /api/tracks/archive/:id
router.put("/archive/:id", auth, archive);

// /api/tracks/restore/:id
router.put("/restore/:id", auth, restore);

// /api/tracks/remove/:id
router.delete("/remove/:id", auth, remove);

// /api/tracks/edit/:id
router.put("/edit/:id", auth, edit);

export default router;
