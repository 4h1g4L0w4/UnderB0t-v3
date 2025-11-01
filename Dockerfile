# Usar Node.js como imagen base
FROM node:20-alpine

# Instalar git (necesario para algunas dependencias de npm)
RUN apk add --no-cache git

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./
COPY tsconfig.json ./

# Instalar todas las dependencias (necesarias para compilar TypeScript)
RUN npm install

# Copiar código fuente
COPY src ./src

# Construir el proyecto TypeScript
RUN npm run build

# Limpiar devDependencies después de la compilación
RUN npm prune --production

# Crear directorio para auth_info
RUN mkdir -p auth_info

# Exponer el puerto (si lo necesitas)
# EXPOSE 3000

# Comando por defecto
CMD ["npm", "start"]

