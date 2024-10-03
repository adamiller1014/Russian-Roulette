import JoiBase from 'joi';
import { joiPasswordExtendCore } from 'joi-password';

const JoiPassword = JoiBase.extend(joiPasswordExtendCore);

const validation = JoiBase.object({
  userName: JoiBase.string().messages({
    'string.empty': `Please enter a your name.`
  }),
  userpass: JoiPassword.string().min(8).messages({
    'string.empty': `Please enter your password.`,
    'string.min': 'Your Password needs to be at least 8 symbols.'
  })
});

export { validation };
