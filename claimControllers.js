import Claim from '../models/claimModel.js'

//@desc     Get a claim by id
//@route    GET /api/claims/:id
//@access   Public
export const getClaimById = (req, res) => {
  const { id } = req.params;
  const claim = await Claim.findById(id);

  if (claim) {
    res.status(200).json({
      success: true,
      data: claim,
    })
  } else {
    res.status(404).json({
      success: false,
      message: 'No claim found'
    })
  }
}


//@desc     Create a claim
//@route    POST /api/claims
//@access   Public
export const createClaim = async (req, res) => {
  const { hospital, date, policyId, amount } = req.body;
  const claim = await Claim.create({
    hospital: hospital,
    date: date,
    policyId: policyId,
    amount: amount,
  })

  if (claim) {
    res.status(201).json({
      success: true,
      data: claim,
    })
  } else {
    res.status(400).json({
      success: false,
      message: 'Claim not created'
    })
  }
}



//@desc     Get all claims for given policy id
//@route    POST /api/claims/policy/:id
//@access   Public
export const getClaimsByPolicyId = async (req, res) => {
  const { id } = req.params;

  const claims = await Claim.find({
    policyId: id,

  })

  if (claims) {
    res.status(200).json({
      success: true,
      count: claims.length,
      data: claims,
    })
  } else {
    res.status(404).json({
      success: false,
      message: 'No claims found'
    })
  }
}

//@desc     Get all claims for given hospital id and claim date
//@route    GET /api/claims?hospital=:hospital&date=:yyyy-mm-dd
//@access   Public
export const getClaims = (req, res) => {
  const { hospital, date } = req.query;
  const claims = await Claim.find({
    hospital: hospital,
    date: date,
  });

  if (claims) {
    res.status(200).json({
      success: true,
      count: claims.length,
      data: claims,
    })
  } else {
    res.status(404).json({
      success: false,
      message: 'No claims found'
    })
  }
}


//@desc     Update claim status by id
//@route    PUT /api/claims/:id
//@access   Public
export const updateClaimStatusById = async (req, res) => {
  const { id } = req.params;

  const claim = await Claim.findByIdAndUpdate(id, {
    claimedStatus: true
  })

  if (claim) {
    res.status(200).json({
      success: true,
      data: claim,
    })
  } else {
    res.status(404).json({
      success: false,
      message: 'No claim found'
    })
  }
}


//@desc     Delete claim by id
//@route    DELETE /api/claims/:id
//@access   Public
export const deleteClaimById = async (req, res) => {
  const { id } = req.params;

  const claim = await Claim.findByIdAndDelete(id);

  if (claim) {
    res.status(200).json({
      success: true,
      data: claim,
    })
  } else {
    res.status(404).json({
      success: false,
      message: 'No claim found'
    })
  }
}
