import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    user_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    picture: { type: String, required: true }
});

export default mongoose.model('Users', UserSchema);
