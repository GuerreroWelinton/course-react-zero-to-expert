# Convención de Commits para mi Curso

Mientras sigo mi curso en video, quiero que mis commits sean claros y fáciles de identificar.  
Por eso decidí crear una convención simple usando alias en Git, que me ayuda a saber si estaba **siguiendo al profe**, **haciendo mis propias prácticas**, **dejando notas rápidas** o **cambiando la estructura del proyecto**.

Con esto, evito commits genéricos como “update” o “fix” y mi historial queda mucho más ordenado.

---

## 🚀 Alias configurados

Estos alias se configuran una sola vez y luego puedo usarlos en cualquier repositorio.  
Los comandos crean mensajes de commit con un formato uniforme, y además el texto final es opcional.

```bash
# Cuando estoy haciendo mi propia práctica
git config --global alias.practice '!f() { if [ -z "$3" ]; then git commit -m "practice - section $1, chapter $2"; else git commit -m "practice - section $1, chapter $2 - $3"; fi; }; f'

# Cuando sigo lo que hace el profe en el video
git config --global alias.video '!f() { if [ -z "$3" ]; then git commit -m "video - section $1, chapter $2"; else git commit -m "video - section $1, chapter $2 - $3"; fi; }; f'

# Cuando quiero dejar notas rápidas relacionadas al curso
git config --global alias.note '!f() { if [ -z "$1" ]; then git commit -m "note"; else git commit -m "note - $*"; fi; }; f'

# Cuando hago cambios de estructura en el proyecto
git config --global alias.structure '!f() { if [ -z "$1" ]; then git commit -m "structure"; else git commit -m "structure - $*"; fi; }; f'
```

---

## 🛠 Cómo usarlos

1. Primero agrego los cambios como siempre:

```bash
git add .
```

2. Luego uso el alias que corresponda:

### ✅ Para prácticas

```bash
git practice 5 8 "arrays"
# => practice - section 5, chapter 8 - arrays

git practice 5 8
# => practice - section 5, chapter 8
```

### ✅ Para cuando sigo el video

```bash
git video 4 2 "setup project"
# => video - section 4, chapter 2 - setup project

git video 4 2
# => video - section 4, chapter 2
```

### ✅ Para notas rápidas

```bash
git note "revisar este ejemplo mañana"
# => note - revisar este ejemplo mañana

git note
# => note
```

### ✅ Para cambios de estructura

```bash
git structure "reorganizar carpetas del módulo 3"
# => structure - reorganizar carpetas del módulo 3

git structure
# => structure
```
