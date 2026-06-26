<div class="masthead">
	<div class="title">v-grader</div>
	<div class="subtitle">
		A simple bouldering v-grade calculator
	</div>
</div>

## About
The main limitation of the V-grading system is that it is inherently relative rather than objective: grades are assigned by comparing new problems to existing “benchmark” climbs rather than measuring difficulty against any fixed, universal standard. As a result, we run into the conceptual problem of “grade inflation” or an endless ladder of increasing difficulty. Rather than defining new higher grades, the benchmark itself should be reassessed and potentially downgraded.

<span class="name">v-grader</span> doesn't claim to solve this problem, but it does provide a simple yet comprehensive grading mechanism that is _close enough_ to being objective.

## Get started
Start by giving each category of your route a rating from <span class="number">0</span> to <span class="number">10</span>. A simple average is then calculated, along with an assigned level where:

$$
\text{level} =
\begin{cases}
\text{soft}, & 0 < x < 0.5 \\
\text{hard}, & 0.5 \le x < 1
\end{cases}
$$

where $x$ is the decimal part of the average.

<div class="row">
	<div class="name">Result</div>
	<div class="result">hard v9</div>
</div>

<style>
	.name {
		color: #4fc1ff;
		font-family: monospace;
	}

	.number {
		color: #9cdcfe;
		font-family: monospace;
	}

	.masthead {
		background-color: #1e1e1e;
		border-radius: 5px;
		padding: 12px;
	}

	.title, .subtitle {
		font-family: monospace;
		text-align: center;
	}

	.title {
		font-size: 24px;
		font-weight: bold;
		letter-spacing: 2px;
	}

	.subtitle {
		font-size: 12px;
		letter-spacing: 0.5px;
		margin-top: 5px;
	}

	.row {
		align-items: center;
		background-color: #333333;
		border: solid 1px #4ec9b0;
		border-radius: 5px;
		display: flex;
		font-family: monospace;
		gap: 1rem;
		justify-content: space-between;
		padding: 1rem;
		max-width: 420px;
	}

	.result {
		font-weight: bold;
	}
</style>