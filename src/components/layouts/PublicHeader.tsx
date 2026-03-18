import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function PublicHeader() {
  return (
    <div>
      <header className="border-b bg-blue-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuLink>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className="text-xl font-bold">
                                    Blog
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center gap-4">
                    <Input
                        type="text"
                        placeholder="Search..."
                        className="w-64 lg:w-96"
                        />
                        {/* asChild:LinkコンポーネントにButtonのスタイルと機能を注入 */}
                        <Button variant="outline" asChild>
                            <Link href="/login">
                                ログイン
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link href="/register">
                                登録
                            </Link>
                        </Button>
                </div>
        </div>
      </header>
    </div>
  )
}
