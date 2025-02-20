const SignpostButton = ({ label }: { label: () => void }) => {
  return (
    <section
      className="relative flex items-center border hover:cursor-pointer"
      onClick={label}
    >
      {/* Signpost Rectangle */}
      <div className="bg-gray-300 text-gray-800 px-4 py-2 font-bold">
        CONTINUE
      </div>

      {/* Triangle (Right Pointer) */}
      <div className="absolute -right-32 -bottom-2.5 w-32 h-8 -mt-24 border-t-34 border-t-transparent border-b-32 border-b-transparent border-l-32 border-l-gray-300"></div>
    </section>
  );
};

export default SignpostButton;
