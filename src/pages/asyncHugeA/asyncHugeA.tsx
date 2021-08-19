import { dynamic } from 'umi';

export default dynamic({
  loader: async function() {
    const {default: HugeA} = await import('./HugeA');
    return HugeA;
  }
})
