function Title({ heading }) {
  return (
    <div className="mb-4 text-center">
      <div className="border-b-2 inline-block border-b-sky-800">
        <h1 className="text-3xl uppercase font-bold mb-2">{heading}</h1>
      </div>
    </div>
  );
}

export default Title;
