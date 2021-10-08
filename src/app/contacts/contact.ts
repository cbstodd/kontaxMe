// export class Contact {
//     constructor(
//       public $key: string,
//       public firstName: string,
//       public lastName: string,
//       public email: string,
//       public phoneNumber: string,
//       public subject: string,
//       public body: string,
//       public sentDate: number,
//       public viewed: boolean,
//       public uid: string,
//     ) {
//     }
// }

export class Contact {
    constructor(
      public createdAtDate: Date = new Date(),
      public email: string,
      public isNotABot: boolean,
      public message: string,
      public name: string,
      public phone: number,
      public reason: string,
      public replied: boolean,
      public uid: string,
      public updatedAt: Date = new Date(),
    ) {
    }
}
