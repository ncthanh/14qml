import Button from './Button';
 
export default {
  component: Button,
};
 
export const Primary = {
  render: () => {
    return <div style={{backgroundColor: 'red', padding: '10px'}}>
      <Button />
    </div>
  }
};