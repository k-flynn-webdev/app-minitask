module.exports = {
  apps: [
    {
      name: 'app-minitask',
      script: './src/',
      env: {
        NODE_ENV: 'production',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      instance_var: 'INSTANCE_ID',
      autorestart: true,
      watch: true,
      max_memory_restart: '150M',
      ignore_watch: ['log/log', 'node_modules'],
    },
  ],
}
