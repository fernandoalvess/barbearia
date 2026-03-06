import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-6">
          <p className="text-center text-sm text-gray-400">
            © 2026 <span className="font-bold">FSW Barber</span>. Todos os
            direitos reservados.
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
