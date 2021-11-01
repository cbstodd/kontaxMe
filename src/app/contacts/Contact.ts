export class Contact {
    constructor(
      public archive: boolean,
      public createdAt: number,
      public email: string,
      public isNotABot: boolean,
      public message: string,
      public name: string,
      public phone: number,
      public viewed: boolean,
      public reason: string,
      public replied: boolean,
      public uid: string,
      public updatedAt: number = Date.now()
    ) {
    }
}
