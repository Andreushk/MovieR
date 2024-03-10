import IPersonalDataStructure from '@/types/personalDataStricture';

export const TITLE = 'Disclaimer Regarding User Data Confidentiality and Security';
export const INTRODUCTION =
  'This is a disclaimer outlining the terms and conditions regarding the confidentiality and security of user data provided by individuals visiting this website.';

// Of course, it isn't correct to set up such king of data like this.
// TODO: implement receiving data from the server.

export const personalDataStructure: IPersonalDataStructure[] = [
  {
    title: '1. User Responsibility:',
    text: "By using this website and providing any personal or sensitive information, users acknowledge and accept that they do so at their own risk. It is the user's responsibility to exercise caution and discretion when sharing such information.",
  },
  {
    title: '2. Limitation of Liability:',
    text: 'Nobody shall be held liable or responsible for any breaches, unauthorized access, loss, damage, or misuse of user data that may occur. Users understand and agree that they use this website and provide information at their own risk.',
  },
  {
    title: '3. Acceptance:',
    text: 'By continuing to use this website, users signify their acceptance of this disclaimer and the inherent risks associated with the transmission and storage of data over the internet.',
  },
];
