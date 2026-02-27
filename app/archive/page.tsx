import ArchiveList from '@/components/ArchiveList'

export default function ArchivePage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-inkbrown">📜 Thy Archive</h1>
        <p className="text-inkbrown/60 mt-1">Personas of adventures past</p>
      </div>
      <ArchiveList />
    </div>
  )
}
