{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function moveButton() \{\
    const noBtn = document.getElementById('noButton');\
    \
    // Calculate random position within the screen\
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);\
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);\
    \
    noBtn.style.left = x + 'px';\
    noBtn.style.top = y + 'px';\
\}\
\
function celebrate() \{\
    // Change text and image\
    document.getElementById('question').innerHTML = "Yay! See you on the 14th! \uc0\u55357 \u56856 ";\
    document.getElementById('main-image').src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHYybmZueXh6Z3R3eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/KZTic7sqK6iL21yq9O/giphy.gif";\
    \
    // Hide the No button\
    document.getElementById('noButton').style.display = 'none';\
\}}