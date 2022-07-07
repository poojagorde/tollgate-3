import express from 'express'
import { createClaim, deleteClaimById, getClaimById, getClaims, getClaimsByPolicyId, updateClaimStatusById } from '../controllers/claimControllers.js'

const router = express.Router()

router.route('/').get(getClaims).post(createClaim)
router.route('/policy/:id').get(getClaimsByPolicyId)
router
  .route('/:id')
  .get(getClaimById)
  .post(updateClaimStatusById)
  .delete(deleteClaimById)

export default router
