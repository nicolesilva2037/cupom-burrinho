export default function StoreHero(){


return (

<section className="relative overflow-hidden bg-gradient-sky py-20">
<div className="absolute inset-0 opacity-40 pointer-events-none">
<div
className="
absolute 
top-10 
left-10 
w-40 
h-40 
rounded-full 
blur-3xl
"
style={{
background:
"color-mix(in oklch, oklch(0.72 0.18 45) 20%, transparent)"
}}
></div>
<div
className="
absolute 
bottom-10 
right-10 
w-40 
h-40 
rounded-full 
blur-3xl
"
style={{
background:
"color-mix(in oklch, oklch(0.72 0.11 235) 30%, transparent)"
}}
></div>
</div>
<div className="
relative 
max-w-6xl 
mx-auto 
px-4 
text-center
">
<span
className="
inline-flex
items-center
rounded-full
bg-accent
text-blue-burrinho-deep
px-4
py-1.5
text-xs
font-bold
uppercase
tracking-wider
"
>
🛍️ Parceiros oficiais
</span>
<h1
className="
mt-5
text-5xl
md:text-6xl
font-display
font-bold
"
>
Lojas que ajudam você a economizar com o Burrinho!
</h1>
<p
className="
mt-5
text-lg
text-muted-foreground
max-w-2xl
mx-auto
"
>
Confira todos os parceiros que oferecem descontos exclusivos para membros do clube.
</p>
</div>
</section>
)
}