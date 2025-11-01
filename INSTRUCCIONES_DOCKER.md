# 🐳 Instrucciones Rápidas de Docker

## Inicio Rápido

### 1️⃣ Ejecutar el bot en modo producción

```bash
docker-compose up -d
```

### 2️⃣ Ver el código QR

```bash
docker-compose logs -f
```

Escanea el código QR que aparece en los logs con tu WhatsApp.

### 3️⃣ Verificar que está funcionando

En otro terminal, envía un mensaje con `!help` o `!ping` a tu número o a un grupo.

### 4️⃣ Detener el bot

```bash
docker-compose down
```

---

## Modo Desarrollo

Para desarrollo con hot-reload (recarga automática al cambiar código):

```bash
docker-compose -f docker-compose.dev.yml up
```

**Importante**: En modo desarrollo, el código se monta como volumen, por lo que los cambios en `src/` se reflejan inmediatamente.

---

## Comandos Útiles

### Ver logs en tiempo real
```bash
docker-compose logs -f
```

### Ver los últimos 100 logs
```bash
docker-compose logs --tail=100
```

### Reiniciar el bot
```bash
docker-compose restart
```

### Reconstruir la imagen
```bash
docker-compose build --no-cache
docker-compose up -d
```

### Entrar al contenedor
```bash
docker-compose exec whatsapp-bot sh
```

### Ver estado del contenedor
```bash
docker-compose ps
```

---

## Solución de Problemas

### Problema: "Container name already exists"
```bash
docker-compose down
docker rm -f whatsapp-bot
docker-compose up -d
```

### Problema: "Cannot connect to Docker daemon"
```bash
# Verificar que Docker está corriendo
sudo systemctl status docker

# Si no está corriendo, iniciarlo
sudo systemctl start docker
```

### Problema: "Permission denied"
```bash
# Agregar usuario al grupo docker
sudo usermod -aG docker $USER

# Cerrar sesión y volver a iniciar
```

### Problema: Necesitas volver a vincular el bot
```bash
docker-compose down
rm -rf auth_info
docker-compose up -d
docker-compose logs -f
```

---

## Persistencia de Datos

La carpeta `auth_info` está montada como volumen, por lo que:

✅ **Se conserva** la sesión aunque reinicies el contenedor  
✅ **Se comparte** entre la host y el contenedor  
⚠️ **No la elimines** si no quieres volver a vincular

---

## Limpieza

### Eliminar todo (incluyendo datos de auth)
```bash
docker-compose down -v
rm -rf auth_info
```

### Eliminar solo la imagen
```bash
docker rmi whatsapp-bot_whatsapp-bot
```

---

## Próximos Pasos

1. 📖 Lee el [README.md](README.md) completo para más detalles
2. 🔧 Personaliza los comandos en `src/index.ts`
3. 🎨 Agrega más funcionalidades al bot

