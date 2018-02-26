import * as React from 'react';

export type Props = {
  data: Data
};
// tslint:disable-next-line
export const Result: (props: Props) => JSX.Element = (props: Props) =>
 ((
    <div className='col-md-12'>
      <pre>
        {JSON.stringify(props.data, null, 2)}
      </pre>
    </div>
  ));
