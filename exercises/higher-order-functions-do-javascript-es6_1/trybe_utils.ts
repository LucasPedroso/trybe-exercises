enum Methods {
  map = 'mapear',
  reduce = 'reduzir',
  filter = 'filtrar',
}

class TrybeUtils {
  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _email: string;


  public get id() {
      return this._id;
  }

  public set id(id: number) {
      if (id <= 0) {
          throw new Error('The id is invalid');
      }
      this._id = id;
  }

  public getFullName(): string {
      return `${this._firstName} ${this._lastName}`;
  }
}
