import { Input } from "@/components/ui/input"

export default function SearchBarNav() {
    return (
        <div>
            <Input
                type="search"
                placeholder="Search"
                className="md:w-[200px] lg:w-[400px] rounded-full w-full px-8 my-4"
            />
        </div>
    )
}
