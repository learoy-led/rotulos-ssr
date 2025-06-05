import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true, trim: true,
      validate: {
        validator: function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message:
          'El valor proporcionado no es un email válido. Por favor, revísalo y vuelve a intentarlo.'
      }
     },
    password: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (value) {
          return /^(?=.*?[a-z])(?=.*?[A-Z]).{6,}$/.test(value);
        },
        message:
          'La contraseña debe tener al menos 6 caracteres y contener mayúsculas y minúsculas.'
      }
    }
  },
  {
    timestamps: true,
    collection: 'users'
  }
);

userSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

const User = mongoose.model('User', userSchema);

export default User