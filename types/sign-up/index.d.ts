type Data = {
  title: string,
  name: string,
  surname: string,
  gender: string,
  resident: string
};

type ViewState = {
  viewIndex: number
};

type ActionWithPayload<T> = {
  type: string,
  payload: T
}
