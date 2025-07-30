module.exports = {
  apps : [{
    name: "uptime-kuma", // Asegúrate de que este nombre sea el que usas para PM2
    script: "./server/server.js", // La ruta a tu script de inicio de Uptime Kuma
    args: "--expose-gc", // Si tenías algún argumento adicional en tu comando de inicio
    interpreter: "node", // Asegúrate de que el intérprete sea 'node'

    env: {
      NODE_ENV: "production",
      // ¡Añade esta línea para deshabilitar la verificación de certificados!
      NODE_TLS_REJECT_UNAUTHORIZED: "0"
    }
  }]
};
