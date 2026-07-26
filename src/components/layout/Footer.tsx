export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10">
      <p className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Samuel Blasco
      </p>
    </footer>
  );
}