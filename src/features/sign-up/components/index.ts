import { stateActions } from '../actions/data';
import { isDisabledSelector } from '.././selectors/disabled.selectors';
import { SignUp } from './sign-up';

import { connect,
  Dispatch,
  MapDispatchToProps,
  MapStateToProps
} from 'react-redux';

export type StateProps = {
  viewIndex: number,
  disabled: boolean,
  data: Data
};

export type DispatchProps = {
  onChangeState: (payload: { [key: string]: string }) => void;
  onChangeView: () => void;
};

const mapStateToProps: MapStateToProps<StateProps, void> = ( state: ModuleStore): StateProps => ({
  viewIndex: state.viewReducer.viewIndex,
  disabled: isDisabledSelector(state),
  data: state.dataReducer
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, void> = ( dispatch: Dispatch<Function>) => ({
  onChangeState: (payload: { [key: string]: string }) => dispatch(stateActions.onStateChange(payload)),
  onChangeView: () => dispatch(stateActions.onViewChange())
});


// TODO should think about type
// tslint:disable-next-line
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
