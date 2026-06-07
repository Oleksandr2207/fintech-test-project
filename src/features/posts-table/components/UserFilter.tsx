import { Select } from '@/shared/components/Select'
import type { User } from '@/shared/types/user'

interface UserFilterProps {
  users: User[]
  value: string
  onChange: (value: string) => void
}

export function UserFilter({ users, value, onChange }: UserFilterProps) {
  const options = users.map((user) => ({
    value: String(user.id),
    label: `${user.name} (${user.email})`,
  }))

  return (
    <Select
      label="Filter by user"
      options={options}
      placeholder="All users"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-full sm:max-w-xs"
    />
  )
}
