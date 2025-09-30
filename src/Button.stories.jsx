import Button from './Button';
 
export default {
  component: Button,
};
 
export const Primary = {
  render: () => {
    return <div style={{backgroundColor: 'pink', padding: '10px'}}>
      <Button />
    </div>
  }
};