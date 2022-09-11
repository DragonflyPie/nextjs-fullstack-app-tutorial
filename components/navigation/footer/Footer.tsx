export interface IFooter extends React.ComponentPropsWithoutRef<"footer"> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <div
      className={`w-full px-5 py-3 bg-brown-500 text-slate-500 ${className}`}
    >
      <p>Russia</p>
    </div>
  );
};

export default Footer;
