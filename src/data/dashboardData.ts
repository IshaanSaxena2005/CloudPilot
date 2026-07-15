import {
  LayoutDashboard,
  ScanSearch,
  Activity,
  TrendingUp,
  Sparkles,
  Receipt,
  Settings,
  Server,
  Database,
  PiggyBank,
  Cpu,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  label: string
  icon: LucideIcon
  active?: boolean
}

export const navItems: NavItem[] = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Cost Analysis', icon: ScanSearch },
  { label: 'Monitoring', icon: Activity },
  { label: 'Forecast', icon: TrendingUp },
  { label: 'AI Recommendations', icon: Sparkles },
  { label: 'Billing', icon: Receipt },
  { label: 'Settings', icon: Settings },
]

export interface StatCard {
  label: string
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  change: string
  positive: boolean
  icon: LucideIcon
}

export const statCards: StatCard[] = [
  {
    label: 'Total Monthly Cost',
    value: 48250,
    prefix: '$',
    change: '-8.2% vs last month',
    positive: true,
    icon: PiggyBank,
  },
  {
    label: 'Estimated Savings',
    value: 12480,
    prefix: '$',
    change: '+14.6% identified',
    positive: true,
    icon: TrendingUp,
  },
  {
    label: 'Active Resources',
    value: 1342,
    change: '+37 this week',
    positive: false,
    icon: Server,
  },
  {
    label: 'AI Health Score',
    value: 92,
    suffix: '/100',
    change: '+5 pts improvement',
    positive: true,
    icon: Cpu,
  },
]

/** Monthly cloud spend trend (last 12 months, in USD thousands). */
export interface SpendPoint {
  month: string
  cost: number
}

export const spendTrend: SpendPoint[] = [
  { month: 'Aug', cost: 61200 },
  { month: 'Sep', cost: 59800 },
  { month: 'Oct', cost: 63400 },
  { month: 'Nov', cost: 58100 },
  { month: 'Dec', cost: 60500 },
  { month: 'Jan', cost: 56700 },
  { month: 'Feb', cost: 54900 },
  { month: 'Mar', cost: 55800 },
  { month: 'Apr', cost: 52300 },
  { month: 'May', cost: 50100 },
  { month: 'Jun', cost: 49400 },
  { month: 'Jul', cost: 48250 },
]

export type Priority = 'high' | 'medium' | 'low'

export interface Recommendation {
  title: string
  savings: string
  priority: Priority
  icon: LucideIcon
}

export const recommendations: Recommendation[] = [
  {
    title: 'Reduce idle EC2 instances',
    savings: '$3,420/mo',
    priority: 'high',
    icon: Server,
  },
  {
    title: 'Move workloads to Spot instances',
    savings: '$2,180/mo',
    priority: 'high',
    icon: Cpu,
  },
  {
    title: 'Optimize storage lifecycle',
    savings: '$1,260/mo',
    priority: 'medium',
    icon: Database,
  },
  {
    title: 'Enable Reserved Instances',
    savings: '$4,050/mo',
    priority: 'low',
    icon: PiggyBank,
  },
]

export interface Provider {
  name: string
  spend: string
  change: string
  positive: boolean
  /** Share of total spend, 0-100, drives the progress bar. */
  usage: number
  color: string
}

export const providers: Provider[] = [
  {
    name: 'AWS',
    spend: '$26,140',
    change: '-6.4%',
    positive: true,
    usage: 54,
    color: '#ff9900',
  },
  {
    name: 'Azure',
    spend: '$13,880',
    change: '+2.1%',
    positive: false,
    usage: 29,
    color: '#3ba7ff',
  },
  {
    name: 'Google Cloud',
    spend: '$8,230',
    change: '-3.7%',
    positive: true,
    usage: 17,
    color: '#64cefb',
  },
]
