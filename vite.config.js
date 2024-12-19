import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_BASE_URL': JSON.stringify(env.REACT_APP_BASE_URL),
      'process.env.REACT_APP_SUPABASE_URL': JSON.stringify(env.REACT_APP_SUPABASE_URL),
      'process.env.REACT_APP_SUPABASE_BUCKET': JSON.stringify(env.REACT_APP_SUPABASE_BUCKET),
      'process.env.REACT_APP_SUPABASE_KEY': JSON.stringify(env.REACT_APP_SUPABASE_KEY),
    },
    plugins: [react()],
  };
});
