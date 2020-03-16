import { printObj, classDescription, propDescription } from './Description';

@classDescription('用户')
class UUser {

  @propDescription('账号')
  loginId: string = 'xxx'

  @propDescription('密码')
  loginPwd: string = '888'

}

const uu = new UUser();
printObj(uu)