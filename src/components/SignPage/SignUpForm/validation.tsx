import JoiBase from 'joi';
import { joiPasswordExtendCore } from 'joi-password';

const JoiPassword = JoiBase.extend(joiPasswordExtendCore);

const validation = JoiBase.object({
  userName: JoiBase.string().messages({
    'string.empty': `Please enter a your name.`
  }),
  useremail: JoiBase.string()
    .email({ tlds: { allow: false } })
    .messages({
      'string.empty': `Please enter a valid email. Example: example@email.com`,
      'string.email': `Please enter a valid email. Example: example@email.com`
    }),
  userpass: JoiPassword.string().min(8).messages({
    'string.empty': `Your Password needs to be at least 8 symbols. We recommend a\nmixture of symbols and numbers.`,
    'string.min':
      'Your Password needs to be at least 8 symbols. We recommend a\nmixture of symbols and numbers.'
  }),
  userpass2: JoiPassword.string().min(8).valid(JoiBase.ref('userpass')).messages({
    'string.empty': `Your Password needs to be at least 8 symbols. We recommend a\nmixture of symbols and numbers.`,
    'string.min':
      'Your Password needs to be at least 8 symbols. We recommend a\nmixture of symbols and numbers.',
    'any.only': 'Passwords do not match'
  })
});

export { validation };
