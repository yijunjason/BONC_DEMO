import { Redirect } from 'umi';

export default (props : any) => {
  if (true) {
    return <div style={{backgroundColor: '#8484ce'}}>
      {props.children}
    </div>
  }
  return <Redirect to={'/login'}/>
}
