import '@/app.css';
import App from '@/App.svelte';

const app = new App({
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  target: document.getElementById('app')!,
  intro: true
});

export default app;
