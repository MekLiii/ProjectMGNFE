type IDataSubmit = {
  email: string;
  password: string;
};
interface IDecodeToken {
  nameid: string;
  Guid: string;
  email: string;
}
export type { IDataSubmit, IDecodeToken };
