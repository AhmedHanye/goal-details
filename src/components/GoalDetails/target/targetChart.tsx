import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "يناير", النسبة: 0 },
  { month: "فبراير", النسبة: 50 },
  { month: "مارس", النسبة: 100 },
];

// Todo: change the color of the chart

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;
const TargetChart = () => {
  return (
    <div id="target-chart" className="flex h-[15.0625rem]">
      <ChartContainer config={chartConfig} className="w-full ps-4">
        <AreaChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            className="text-sm font-medium"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            tickFormatter={(value: number) => `%${value}`}
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
            className="text-Gray-400 text-sm"
            direction={"ltr"}
          />
          <Area
            dataKey="النسبة"
            type="linear"
            fillOpacity={0.4}
            fill="var(--color-desktop)"
            stroke="#335FFF"
            strokeWidth={0}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" hideLabel />}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

export default TargetChart;
