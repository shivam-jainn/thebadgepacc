// primitive
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge";

// icon
import { SlDrawer } from "react-icons/sl";

export default function AlertDrawer() {
  return (
    <div >
    <Button variant="outline" size="icon" className="relative p-2">
    <div className="absolute top-1 right-1 w-4 h-4 text-black bg-white rounded-[100%] flex justify-center items-center p-1 text-[10px]">
        1
    </div>
      <SlDrawer className="w-4 h-4" />
    </Button>
    </div>
  )
}
