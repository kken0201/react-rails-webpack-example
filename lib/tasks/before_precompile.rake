task :build_react do
  sh "npm run release"
end

Rake::Task["assets:precompile"].enhance(%i(build_react))
