import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
export function Firstpage() {
  return (
    <div className="max-w-2xl rounded-lg border bg-white p-6 ml-6 shadow-sm">
      <div className="space-y-6">
        {/* Template Name */}
        <div className="space-y-2">
          <Label htmlFor="templateName">Template Name</Label>
          <Input
            id="templateName"
            type="text"
            placeholder="Template Name"
          />
        </div>

        {/* Template File Name */}
        <div className="space-y-2">
          <Label htmlFor="templateFileName">
            Template File Name
          </Label>
          <Input
            id="templateFileName"
            type="text"
            placeholder="Template File Name"
          />
        </div>

        {/* Status */}
        <div className="space-y-3">
          <Label>Status</Label>

          <div className="flex w-fit items-center gap-3 rounded-md border px-3 py-2">
            <Switch id="status" defaultChecked />
            <Label
              htmlFor="status"
              className="cursor-pointer font-normal"
            >
              Active
            </Label>
          </div>
        </div>
      </div>
    </div>
    
  )
}
export default Firstpage
