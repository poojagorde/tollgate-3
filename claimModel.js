import mongoose from 'mongoose'

const claimSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    policyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Policy',
    }

  },
  {
    timestamps: true,
  }
)

const Claim = mongoose.model('Claim', claimSchema)
export default Claim