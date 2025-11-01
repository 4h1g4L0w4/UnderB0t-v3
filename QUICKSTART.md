# ⚡ Inicio Rápido del Bot de WhatsApp

## 🚀 Ejecutar en 3 pasos

### 1️⃣ Ejecutar el bot
```bash
docker-compose up -d
```

### 2️⃣ Ver el código QR
```bash
docker-compose logs -f
```

Escanea el código QR que aparece con tu WhatsApp

### 3️⃣ Probar el bot
Envía `!help` o `!ping` a tu número o a un grupo

---

## 📋 Comandos Esenciales

```bash
# Ver logs en tiempo real
docker-compose logs -f

# Detener el bot
docker-compose down

# Reiniciar el bot
docker-compose restart

# Ver estado
docker-compose ps
```

---

## 🔧 Modo Desarrollo

Para desarrollo con recarga automática:
```bash
docker-compose -f docker-compose.dev.yml up
```

---

## ❓ Problemas

**No aparece el QR?**
```bash
docker-compose down
rm -rf auth_info
docker-compose up -d
docker-compose logs -f
```

**Más ayuda:** Lee [README.md](README.md) o [INSTRUCCIONES_DOCKER.md](INSTRUCCIONES_DOCKER.md)

