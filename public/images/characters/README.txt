КАРТИНКИ ПЕРСОНАЖЕЙ — как всё разложено
========================================

Каждый персонаж — своя папка. Всё про персонажа лежит в одном месте:

  kai-aster/     — Кай Астор
  leonard/       — Леонард Вейл
  vern-twins/    — близнецы Элиан и Ноэль Верн
  viktor-aster/  — Виктор Астор

Внутри папок два вида файлов:
  1) СЫРОЙ АРТ — оригиналы с длинными именами (KaiAsterMainCard.png и т.п.).
     Это библиотека поз/карточек, из неё берём и обрабатываем спрайты.
  2) ИГРОВЫЕ СПРАЙТЫ — короткие имена, уже с прозрачным фоном, реально в игре:
       kai-aster/  : kai-neutral, kai-annoyed, kai-worried, kai-onclick, kai-cut, kai-cut2
       leonard/    : leonard-neutral, leonard-annoyed, leonard-onclick
       vern-twins/ : ellian-1, ellian-2, ellian-protector, noel-1, noel-2

Как спрайт подключается в коде (путь = папка персонажа + имя файла):
  /images/characters/kai-aster/kai-neutral.png

Где прописаны пути:
  src/features/novel/data/chapter1.ts         — спрайты в сценах (константы вверху файла)
  src/pages/GamePage/GamePage.tsx             — реакции на клик (reactionSprites) + Элиан-защитник
  src/pages/StartPage/StartPage.tsx           — Кай на главном экране (kai-cut / kai-cut2)
  src/pages/ComingSoonPage/ComingSoonPage.tsx — близнецы на заглушке

Иконка сайта (favicon) лежит отдельно: public/icon.png (подключена в index.html).

Добавляешь новый спрайт — клади в папку нужного персонажа и пропиши путь
в соответствующем файле выше.
