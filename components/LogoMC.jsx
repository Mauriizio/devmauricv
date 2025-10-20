// components/LogoMC.jsx
export default function LogoMC({
  className = "h-10 w-auto text-cyan-600",
  title = "Maurizio Caballero",
}) {
  return (
  <svg
 
  viewBox="0 0 76.680709 44.671051"
   role="img"
   aria-label={title}
  className={className + " select-none"}
    xmlns="http://www.w3.org/2000/svg"
     >

      <title>{title}</title>

    <path
      fill="currentColor"
     d="m 0,44.660594 h 9.898456 l 16.289424,-27.018189 15.261656,27.028649 35.23118,-0.0307 -5.11014,-8.02009 -30.88751,0.0171 10.63598,-18.996697 9.813098,-7.45e-4 L 51.319316,1.7976846e-7 38.682931,20.384371 26.184443,0.11493018 Z"
     /></svg>


  );
}
