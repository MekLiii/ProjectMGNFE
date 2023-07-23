type IDataSubmit = {
  email: string;
  password: string;
};
interface IDecodeToken {
  nameid: string;
  Guid: string;
  email: string;
  exp: number;
}
export type { IDataSubmit, IDecodeToken };
